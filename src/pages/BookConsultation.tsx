import { Button } from "@/components/ui/button";
import Cal, { getCalApi } from "@calcom/embed-react";
import React, { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BookConsultationProps {}

const BookConsultation: React.FC<BookConsultationProps> = ({}) => {
  const navigate = useNavigate();
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
    <div className="flex flex-col p-10 gap-3">
      <Button
        onClick={() => navigate(-1)}
        className="w-fit gap-2 pl-0"
        variant={"link"}
      >
        <ArrowLeft />
        Back
      </Button>
      <Cal
        calLink="novitckii/30min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </div>
  );
};

export default BookConsultation;
