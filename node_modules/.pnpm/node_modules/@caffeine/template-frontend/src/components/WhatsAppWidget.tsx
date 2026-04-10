import { useRef, useState } from "react";

const WA_PHONE = "917090795666";
const WA_URL = `https://wa.me/${WA_PHONE}`;

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleSend() {
    const msg = inputRef.current?.value.trim() ?? "";
    const url = msg ? `${WA_URL}?text=${encodeURIComponent(msg)}` : WA_URL;
    window.open(url, "_blank", "noopener,noreferrer");
    if (inputRef.current) inputRef.current.value = "";
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSend();
  }

  function handleLauncherClick() {
    if (!open) {
      setOpen(true);
    } else {
      handleSend();
    }
  }

  function scaleLauncherUp(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.transform = "scale(1.08)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(37,211,102,0.7)";
  }

  function scaleLauncherDown(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 14px rgba(37,211,102,0.55)";
  }

  function highlightSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.background = "#1ebe5d";
  }

  function resetSend(e: React.MouseEvent<HTMLButtonElement>) {
    e.currentTarget.style.background = "#25D366";
  }

  return (
    <>
      {/* Chat Window */}
      {open && (
        <dialog
          open
          data-ocid="whatsapp-chat-window"
          style={{
            position: "fixed",
            bottom: "90px",
            right: "24px",
            width: "300px",
            background: "#fff",
            borderRadius: "12px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
            zIndex: 9998,
            padding: 0,
            border: "none",
            margin: 0,
          }}
          aria-label="WhatsApp Support Chat"
        >
          {/* Header */}
          <div
            style={{
              background: "#25D366",
              padding: "12px 14px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <svg
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0 }}
            >
              <circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.2)" />
              <path
                d="M25.24 21.57c-.44-.22-2.62-1.29-3.02-1.44-.4-.15-.7-.22-1 .22-.29.44-1.14 1.44-1.4 1.73-.26.3-.52.33-.96.11-.44-.22-1.87-.69-3.56-2.2-1.32-1.17-2.2-2.62-2.46-3.06-.26-.44-.03-.68.19-.9.2-.2.44-.52.67-.77.22-.26.29-.44.44-.74.15-.3.07-.55-.04-.77-.11-.22-1-.24-1.36-3.29-.36-.85-.73-.74-1-.75-.26-.01-.55-.01-.85-.01-.3 0-.77.11-1.17.55-.4.44-1.55 1.51-1.55 3.69 0 2.17 1.58 4.28 1.8 4.57.22.3 3.12 4.76 7.56 6.68 1.06.46 1.88.73 2.52.93 1.06.34 2.03.29 2.79.18.85-.13 2.62-1.07 2.99-2.1.37-1.03.37-1.92.26-2.1-.11-.18-.4-.3-.85-.52z"
                fill="white"
              />
              <path
                d="M18 5C10.82 5 5 10.82 5 18c0 3.17.83 6.14 2.28 8.72L5.07 31.5l4.98-1.31A12.93 12.93 0 0018 31c7.18 0 13-5.82 13-13S25.18 5 18 5zm0 23.64a10.59 10.59 0 01-5.42-1.49l-.39-.23-3.72.93.99-3.61-.25-.4A10.57 10.57 0 017.36 18C7.36 11.59 12.04 6.36 18 6.36S28.64 11.59 28.64 18 23.96 28.64 18 28.64z"
                fill="white"
              />
            </svg>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p
                style={{
                  margin: 0,
                  color: "white",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: 1.3,
                }}
              >
                Support Team
              </p>
              <p
                style={{
                  margin: 0,
                  color: "rgba(255,255,255,0.88)",
                  fontSize: "11px",
                  lineHeight: 1.3,
                }}
              >
                Typically replies instantly
              </p>
            </div>

            <button
              type="button"
              data-ocid="whatsapp-close-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              style={{
                background: "none",
                border: "none",
                color: "white",
                fontSize: "22px",
                cursor: "pointer",
                lineHeight: 1,
                padding: "2px 4px",
                flexShrink: 0,
              }}
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div
            style={{
              background: "#ECE5DD",
              padding: "16px 14px",
              minHeight: "100px",
            }}
          >
            <div
              style={{
                background: "white",
                borderRadius: "0 10px 10px 10px",
                padding: "10px 12px",
                fontSize: "13px",
                color: "#333",
                maxWidth: "90%",
                lineHeight: 1.55,
                boxShadow: "0 1px 2px rgba(0,0,0,0.08)",
              }}
            >
              Hi! How can we help you? Type your message and we&apos;ll respond
              on WhatsApp.
            </div>
          </div>

          {/* Footer */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              padding: "10px",
              background: "#F0F0F0",
              borderTop: "1px solid #ddd",
              alignItems: "center",
            }}
          >
            <input
              ref={inputRef}
              data-ocid="whatsapp-message-input"
              type="text"
              placeholder="Type a message..."
              onKeyDown={handleKeyDown}
              style={{
                flex: 1,
                border: "none",
                background: "white",
                borderRadius: "20px",
                padding: "8px 14px",
                fontSize: "13px",
                outline: "none",
                color: "#333",
              }}
              aria-label="WhatsApp message"
            />
            <button
              type="button"
              data-ocid="whatsapp-send-btn"
              onClick={handleSend}
              onMouseEnter={highlightSend}
              onMouseLeave={resetSend}
              aria-label="Send message on WhatsApp"
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                background: "#25D366",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "background 0.2s",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <path d="M2 21l21-9L2 3v7l15 2-15 2z" />
              </svg>
            </button>
          </div>
        </dialog>
      )}

      {/* Launcher Button */}
      <button
        type="button"
        data-ocid="whatsapp-launcher"
        onClick={handleLauncherClick}
        onMouseEnter={scaleLauncherUp}
        onMouseLeave={scaleLauncherDown}
        aria-label="Open WhatsApp chat"
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          background: "#25D366",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 14px rgba(37,211,102,0.55)",
          zIndex: 9999,
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="white"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.122 1.531 5.856L.05 23.5l5.8-1.452A11.93 11.93 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.795 9.795 0 01-5.017-1.382l-.36-.213-3.44.861.916-3.338-.234-.374A9.777 9.777 0 012.182 12C2.182 6.58 6.58 2.182 12 2.182S21.818 6.58 21.818 12 17.42 21.818 12 21.818z" />
        </svg>
      </button>
    </>
  );
}
