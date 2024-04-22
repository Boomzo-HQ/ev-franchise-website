import ContactUs from "@/components/general/ContactUs";
import Copyright from "@/components/general/Copyright";
import Navbar from "@/components/general/Navbar";
import React from "react";

const Income = () => {
  return (
    <>
      <Navbar />
      <div className="px-[8vw] py-20 md:p-24">
        <h1 className="text-2xl md:text-4xl font-bold text-center mb-12">
          How much income you can make
        </h1>
        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            📈 Initial Investment
          </h2>
          <p>
            The cost to establish an electric vehicle charging station varies
            based on location and the number of chargers. Setting up a station
            typically ranges from Rs. 5-10 lakhs, with individual charging
            points costing between Rs. 50,000 to 1 lakh each. For a station with
            four charging points, the initial outlay might total Rs. 20-30
            lakhs.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            🚗 Potential for Profit
          </h2>
          <p>
            Imagine 100 electric vehicle owners who charge their vehicles daily
            at your station. This could lead to monthly revenues of
            approximately Rs. 4-5 lakhs. With a gross profit margin of about
            30%, you could make a monthly profit of Rs. 1.2-1.5 lakhs, which
            translates to a net income of Rs. 60,000-75,000.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            📊 Revenue Breakdown
          </h2>
          <p>
            Consider a scenario where 100 EV owners use your station daily for 2
            hours each. Daily revenue could hit Rs. 10,000 (based on Rs. 100 per
            charge). This would amount to a monthly revenue of Rs. 3 lakhs. With
            a gross margin of 30%, profits could be around Rs. 90,000 per month,
            while net margins, after accounting for operating expenses of
            15-20%, might range between Rs. 45,000-60,000.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            🌿 Scalability and Expansion
          </h2>
          <p>
            The electric vehicle charging sector offers remarkable scalability.
            Starting small, you can gradually add more chargers and expand to
            new locations or even consider franchising. The business model
            supports expansive growth, promising substantial scalability.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            🚀 Five-Year Growth Strategy
          </h2>
          <p>
            To maximize the potential of this venture, a well-defined five-year
            strategy is crucial:
            <ul className="list-disc ml-8 mt-2">
              <li>
                Year 1: Launch your initial station equipped with four chargers.
              </li>
              <li>Year 2: Open a second site, also with four chargers.</li>
              <li>
                Year 3: Enhance the first site with an additional two chargers
                and open a third site with four chargers.
              </li>
              <li>
                Year 4: Increase chargers at existing sites and introduce a
                fourth location.
              </li>
              <li>
                Year 5: Begin franchising and add five more locations, each
                outfitted with four chargers.
              </li>
            </ul>
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl text-gray-500 md:text-3xl font-semibold mb-4">
            ✅ Conclusion
          </h2>
          <p>
            Investing in electric vehicle charging infrastructure presents a
            lucrative and scalable business opportunity. It not only serves a
            growing market of EV owners but also promises significant
            profitability. With strategic planning and a focus on scalability,
            entrepreneurs can create a thriving business that supports a
            sustainable future.
          </p>
        </section>
      </div>
      <ContactUs />
      <Copyright />
    </>
  );
};

export default Income;
