import Map "mo:core/Map";
import List "mo:core/List";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Text "mo:core/Text";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import AccessControl "mo:caffeineai-authorization/access-control";



actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type Inquiry = {
    name : Text;
    company : Text;
    email : Text;
    phone : ?Text;
    productInterest : Text;
    quantity : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  let inquiries = Map.empty<Text, Inquiry>();
  let inquiriesList = List.empty<Text>();
  let userProfiles = Map.empty<Principal, UserProfile>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller != user and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Public contact form - accessible to anyone including guests
  public shared ({ caller }) func submitInquiry(
    name : Text,
    company : Text,
    email : Text,
    phone : ?Text,
    productInterest : Text,
    quantity : Text,
    message : Text,
  ) : async () {
    // No authorization check - public contact form accessible to all

    if (name.trim(#predicate(func(c) { c == ' ' })).isEmpty()) {
      Runtime.trap("Name cannot be empty");
    };
    if (company.trim(#predicate(func(c) { c == ' ' })).isEmpty()) {
      Runtime.trap("Company cannot be empty");
    };
    if (email.trim(#predicate(func(c) { c == ' ' })).isEmpty()) {
      Runtime.trap("Email cannot be empty");
    };
    if (productInterest.trim(#predicate(func(c) { c == ' ' })).isEmpty()) {
      Runtime.trap("Product interest cannot be empty");
    };
    if (quantity.trim(#predicate(func(c) { c == ' ' })).isEmpty()) {
      Runtime.trap("Quantity cannot be empty");
    };

    let inquiry : Inquiry = {
      name;
      company;
      email;
      phone;
      productInterest;
      quantity;
      message;
      timestamp = Time.now();
    };

    let id = email.concat("-").concat(Time.now().toText());
    inquiries.add(id, inquiry);
    inquiriesList.add(id);
  };

  // Admin-only: View all inquiries
  public query ({ caller }) func getAllInquiries(_ : ()) : async [(Text, Inquiry)] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #admin))) {
      Runtime.trap("Unauthorized: Only admins can access inquiries");
    };

    if (inquiriesList.isEmpty()) {
      return [];
    };

    let sortedList = inquiriesList.toArray().reverse();
    sortedList.map(
      func(id) {
        switch (inquiries.get(id)) {
          case (null) { Runtime.trap("Inquiry not found for id: " # id) };
          case (?inquiry) { (id, inquiry) };
        };
      }
    );
  };
};
