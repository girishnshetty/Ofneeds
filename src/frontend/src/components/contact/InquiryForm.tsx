import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { useSubmitInquiry } from "../../hooks/useSubmitInquiry";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    productInterest: "",
    quantity: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const submitInquiry = useSubmitInquiry();

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Name is required";
    if (!formData.company.trim()) e.company = "Company is required";
    if (!formData.email.trim()) e.email = "Email is required";
    if (!formData.productInterest) e.productInterest = "Select a category";
    if (!formData.quantity) e.quantity = "Select quantity";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    try {
      await submitInquiry.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        productInterest: "",
        quantity: "",
        message: "",
      });
    } catch {
      /* ignore */
    }
  };

  if (showSuccess)
    return (
      <div className="rounded-2xl border border-border/50 bg-card p-12 text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
        <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
        <p className="text-muted-foreground">
          We'll get back to you within 24 hours.
        </p>
      </div>
    );

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-2xl border border-border/50 bg-card p-8"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="if-name">Name *</Label>
          <Input
            id="if-name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {errors.name && (
            <p className="text-sm text-destructive">{errors.name}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="if-company">Company *</Label>
          <Input
            id="if-company"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
          />
          {errors.company && (
            <p className="text-sm text-destructive">{errors.company}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="if-email">Email *</Label>
          <Input
            id="if-email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {errors.email && (
            <p className="text-sm text-destructive">{errors.email}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="if-phone">Phone</Label>
          <Input
            id="if-phone"
            type="tel"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
        </div>
        <div className="space-y-2">
          <Label>Product Interest *</Label>
          <Select
            value={formData.productInterest}
            onValueChange={(v) =>
              setFormData({ ...formData, productInterest: v })
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Welcome Kits">Welcome Kits</SelectItem>
              <SelectItem value="Apparel">Apparel</SelectItem>
              <SelectItem value="Accessories">Accessories</SelectItem>
              <SelectItem value="Eco-Friendly">Eco-Friendly</SelectItem>
              <SelectItem value="Trophies">Trophies</SelectItem>
            </SelectContent>
          </Select>
          {errors.productInterest && (
            <p className="text-sm text-destructive">{errors.productInterest}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label>Quantity *</Label>
          <Select
            value={formData.quantity}
            onValueChange={(v) => setFormData({ ...formData, quantity: v })}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="50-100">50-100 units</SelectItem>
              <SelectItem value="100-500">100-500 units</SelectItem>
              <SelectItem value="500+">500+ units</SelectItem>
            </SelectContent>
          </Select>
          {errors.quantity && (
            <p className="text-sm text-destructive">{errors.quantity}</p>
          )}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="if-message">Message</Label>
        <Textarea
          id="if-message"
          rows={4}
          value={formData.message}
          onChange={(e) =>
            setFormData({ ...formData, message: e.target.value })
          }
        />
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={submitInquiry.isPending}
        className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
      >
        {submitInquiry.isPending ? (
          <>
            <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Submitting...
          </>
        ) : (
          "Submit Request"
        )}
      </Button>
    </form>
  );
}
