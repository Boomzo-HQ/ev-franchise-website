import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Row } from "@tanstack/react-table";
import { FRANCHISE_DATA, FranchiseType } from "@/types/frnachiseData";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import axios from "axios";
import { API_VERSION, BASE_URL } from "@/utils/APIRoutes";
import { useAuth } from "@/utils/AuthContext";
import { useRouter } from "next/navigation";

type IconProps = React.HTMLAttributes<SVGElement>;

const Icons = {
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};

interface formProps {
  row: Row<FranchiseType>;
}

const InvestmentRange = z.enum([
  "1 Lakh – 15 Lakh",
  "15 Lakh – 30 Lakh",
  "Above 30 Lakh",
]);

const OnboardingAs = z.enum(["Franchise Distributor", "Charging Station"]); // Example values

const BookingForm = ({ row }: formProps) => {
  const formSchema = z.object({
    name: z.string(),
    email: z.string().email(), // Validate string as an email address
    phone: z.string(),
    city: z.string(),
    state: z.string(),
    franchiseName: z.string(),
    investmentRange: InvestmentRange.optional(),
    onBoardingAs: OnboardingAs.optional(),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      city: "",
      state: "",
      franchiseName: row.getValue("franchiseName"),
      investmentRange: undefined,
      onBoardingAs: undefined,
      message: "",
    },
  });

  const [position, setPosition] = React.useState<string | undefined>(undefined);
  const [investmentRange, setInvestmentRange] = React.useState<
    string | undefined
  >(undefined);

  const { signIn } = useAuth();

  const router = useRouter();

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const [selectedState, setselectedState] = React.useState("");
  const [selectedFranchise, setselectedFranchise] = React.useState<string>(
    row.getValue("franchiseName")
  );

  const statesOfIndia = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ];

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    console.log(position);
    console.log(investmentRange);

    if (!investmentRange && !position && !selectedState) return;

    setIsLoading(true);

    await axios
      .post(`${BASE_URL}${API_VERSION}/auth/signup`, {
        name: values.name,
        email: values.email,
        phone: values.phone,
        city: values.city,
        state: selectedState,
        franchiseName: values.franchiseName,
        investmentRange: investmentRange,
        onBoardingAs: position,
        message: values.message,
      })
      .then(({ data }) => {
        console.log(data);
        let user = data.user;
        user.token = data.token;
        setIsLoading(false);
        signIn(user);
        router.push("/booked");
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }

  return (
    <Form {...form}>
      <div className="flex justify-start overflow-y-auto">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-minor text-white">
              Book {row.getValue("franchiseName")}
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] h-[90vh] md:h-[80vh] md:w-[60vw] lg:w-[60vw] lg:max-w-[60vw] border-none bg-[#0077b5] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-white">
                Book {row.getValue("franchiseName")}
              </DialogTitle>
              <DialogDescription className="text-white">
                Fill in the details and our team will reach out to you shortly!
              </DialogDescription>
            </DialogHeader>
            <form
              className="flex flex-col gap-y-4"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <div className="flex flex-col gap-6 sm:flex sm:flex-col md:grid md:grid-cols-2 md:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="city"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">City</FormLabel>
                      <FormControl>
                        <Input placeholder="" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="state"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[9px]">
                      <FormLabel className="text-white">State</FormLabel>
                      <FormControl>
                        {/* <Input placeholder="Enter your state" {...field} /> */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="bg-white text-black"
                              variant="outline"
                            >
                              {selectedState ? selectedState : "Select State"}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full h-[40vh] overflow-y-auto bg-white">
                            <DropdownMenuRadioGroup
                              value={selectedState}
                              onValueChange={setselectedState}
                            >
                              {statesOfIndia.map((state, idx) => {
                                return (
                                  <DropdownMenuRadioItem
                                    key={idx}
                                    value={state}
                                  >
                                    {state}
                                  </DropdownMenuRadioItem>
                                );
                              })}
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="franchiseName"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[9px]">
                      <FormLabel className="text-white">
                        Franchise Name
                      </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="bg-white text-black"
                              variant="outline"
                            >
                              {selectedFranchise}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full h-[40vh] overflow-y-auto bg-white">
                            <DropdownMenuRadioGroup
                              value={selectedFranchise}
                              onValueChange={setselectedFranchise}
                            >
                              {FRANCHISE_DATA.map((franchise, idx) => {
                                return (
                                  <DropdownMenuRadioItem
                                    key={idx}
                                    value={franchise.franchiseName}
                                  >
                                    {franchise.franchiseName}
                                  </DropdownMenuRadioItem>
                                );
                              })}
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="investmentRange"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[9px]">
                      <FormLabel className="text-white">
                        Investment Range
                      </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="bg-white text-black"
                              variant="outline"
                            >
                              {investmentRange
                                ? investmentRange
                                : "Select Investment Range"}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full bg-white">
                            <DropdownMenuRadioGroup
                              value={investmentRange}
                              onValueChange={setInvestmentRange}
                            >
                              <DropdownMenuRadioItem value="1 Lakh – 15 Lakh">
                                1 Lakh – 15 Lakh
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="15 Lakh – 30 Lakh">
                                15 Lakh – 30 Lakh
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Above 30 Lakh">
                                Above 30 Lakh
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="onBoardingAs"
                  render={({ field }) => (
                    <FormItem className="flex flex-col gap-[9px]">
                      <FormLabel className="text-white">
                        Onboarding As
                      </FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              className="bg-white text-black"
                              variant="outline"
                            >
                              {position ? position : "Select Onboarding As"}
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-full bg-white">
                            <DropdownMenuRadioGroup
                              value={position}
                              onValueChange={setPosition}
                            >
                              <DropdownMenuRadioItem value="Franchise Distributor">
                                Franchise Distributor
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Charging Station">
                                Charging Station
                              </DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-white">
                        Message (optional)
                      </FormLabel>
                      <FormControl>
                        <Textarea rows={3} {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-full flex items-center justify-center mt-5">
                <Button type="submit" className="bg-black text-white w-fit">
                  {isLoading && (
                    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                  )}
                  Book Franchise
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </Form>
  );
};

export default BookingForm;
