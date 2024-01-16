import LegalDocuments from "@/components/pages/about-us/legal-documents";
import LicenseRegulation from "@/components/pages/about-us/license-regulations";

const AboutUsSlug = ({ params }: { params: { slug: String } }) => {
  return (
    <>
      {params.slug === "legal-documents" ? (
        <LegalDocuments />
      ) : params.slug === "our-goal" ? (
        <LegalDocuments />
      ) : params.slug === "license-regulations" ? (
        <LicenseRegulation />
      ) : null}
    </>
  );
};

export default AboutUsSlug;
