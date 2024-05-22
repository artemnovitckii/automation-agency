import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";

interface BookConsultationProps {}

const BookConsultation: React.FC<BookConsultationProps> = ({}) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({});
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <div className="flex p-10">
      <Cal
        calLink="novitckii/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default BookConsultation;
