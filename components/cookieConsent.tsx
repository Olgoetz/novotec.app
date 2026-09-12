"use client";

import { useState } from "react";
import CookieConsent from "react-cookie-consent";

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

const CookieConsentComponent = () => {
  const [acceptedCategories, setAcceptedCategories] = useState<string[]>([]);

  const handleAccept = () => {
    console.log("All cookies accepted.");
    setAcceptedCategories(["technically_required", "analytics", "marketing"]);

    window.gtag?.("consent", "update", {
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
      analytics_storage: "granted",
    });
  };

  const handleDecline = () => {
    console.log("Only essential cookies accepted.");
    setAcceptedCategories(["technically_required"]);

    window.gtag?.("consent", "update", {
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
      analytics_storage: "denied",
    });
  };

  const handlePreferences = () => {
    console.log("Show cookie preferences.");
  };

  return (
    <div>
      <CookieConsent
        location="bottom"
        buttonText="Zustimmen und fortfahren"
        declineButtonText="Nur mit technisch notwendigen Cookies fortfahren"
        enableDeclineButton
        onAccept={handleAccept}
        onDecline={handleDecline}
        buttonStyle={{
          backgroundColor: "#D01516",
          color: "#fff",
          borderRadius: "4px",
          fontWeight: "bold",
          padding: "10px 20px",
          fontSize: "14px",
          width: "100%",
        }}
        declineButtonStyle={{
          backgroundColor: "transparent",
          color: "#fff",
          fontWeight: "bold",
          borderRadius: "4px",
          borderColor: "white",
          border: "1px solid",
          padding: "10px 20px",
          fontSize: "14px",
          width: "100%",
        }}
        style={{
          background: "black",
          color: "#fff",
          borderTop: "1px solid #E5E7EB",
          padding: "16px",
        }}
        contentStyle={{
          display: "flex",
          flex: "1 1 auto",
          flexDirection: "column",
          alignItems: "start",
          justifyContent: "center",
          margin: 0,
          padding: "0",
        }}
        contentClasses=""
        buttonWrapperClasses="flex flex-col md:flex-row items-stretch md:items-center gap-3 w-full md:w-auto mt-4 md:mt-0"
        containerClasses="flex flex-col md:flex-row items-start md:items-center gap-4 p-4 max-w-7xl mx-auto"
      >
        <div className="text-sm md:text-base leading-relaxed">
          Wir verwenden Cookies und ähnliche Technologien, um bestimmte
          Funktionen bereitzustellen, die Benutzerfreundlichkeit zu verbessern
          und Inhalte zu liefern, die für Ihre Interessen relevant sind. Je nach
          Zweck können neben technisch notwendigen Cookies auch Analyse- und
          Marketing-Cookies verwendet werden. Durch Klicken auf &quot;Zustimmen
          und fortfahren&quot; erklären Sie Ihr Einverständnis mit der
          Verwendung der vorgenannten Cookies. Weitere Informationen finden Sie
          in unserer{" "}
          <a className="text-novo-red underline" href="/datenschutz">
            Datenschutzerklärung
          </a>
          .
        </div>
      </CookieConsent>
    </div>
  );
};

export default CookieConsentComponent;
