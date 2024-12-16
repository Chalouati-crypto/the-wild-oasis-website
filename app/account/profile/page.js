import SelectCountry from "@/app/_components/SelectCountry";
import UpdateProfileForm from "@/app/_components/UpdateProfileForm";

export const metadata = {
  title: "Profile.",
};
export default function Page() {
  // CHANGE

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>
      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry />
      </UpdateProfileForm>
    </div>
  );
}
