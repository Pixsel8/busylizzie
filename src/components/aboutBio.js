import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const AboutBio = () => {
  return (
    <div className="bg-white my-20 lg:my-32 xl:mt-0 lg:px-8">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex flex-col md:flex-row w-full">
          <div className="basis-full lg:basis-1/2 xl:basis-2/5">
            <StaticImage
              src="../images/chloe-picture.png"
              alt="Picture of Chloe"
            />
          </div>
          <div className="basis-full lg:basis-1/2 xl:basis-3/5 ml-10">
            <h2 className="mt-0">Chloe Bean</h2>
            <h3 className="mt-5">Managing Director and Head Carer</h3>
            <p className="mt-10">
              I have worked in the care industry for 17 years as a Health Care
              Assistant. Beginning my career in a nursing home at the age of 15,
              I knew then that I wanted to be involved in helping others feel
              better. I went to college and studied health and social care with
              a view to carrying on my education at University to become a
              registered nurse.
            </p>{" "}
            <p className="mt-5">
              {" "}
              Whilst at college I worked in a few nursing homes to gain
              experience and realised very quickly that the HCAs have a lot more
              patient contact than the nurses. With this in mind (and knowing
              that I want to be able to talk more with the patients and give all
              of my time to them, instead of being snowed under with paperwork),
              I knew I would be happier to carry on being a HCA.
            </p>
          </div>
        </div>
        <div className="">
          <p className="mt-5">
            {" "}
            After 7 years of working in a nursing/residential home, I wanted to
            explore a more challenging role and started working at the Royal
            United Hospital on the Acute Stroke Unit. I was a member of the
            nursing team under the supervision of the registered nurse,
            assisting with all duties required to ensure the smooth running of
            the ward. My training enabled me to carry out much more complex
            tasks than I had been able to in the residential/nursing home and I
            enjoyed the responsibility I was given. With the qualifications and
            training I had done since school and in previous jobs, I was able to
            move forward with my education at the RUH. I spent 8 years working
            on the Acute Stroke Unit and in other departments around the
            hospital and while I enjoyed the cardiac wards, surgery and the
            aftercare were becoming my focus.
          </p>
          <p className="mt-5">
            {" "}
            As well as the RUH, I began working in the private sector at
            CircleBath Hospital. I worked on the inpatient ward and helped
            clients with post-surgery care; checking their observations,
            dressings after surgery and support with personal hygiene.
          </p>
          <p className="mt-5">
            {" "}
            Later in my time at CircleBath, I decided to explore other areas of
            the hospital and began spending some time in the outpatient’s
            department. There I would chaperone the consultants in their clinic
            and assist with procedures. I found this very interesting to watch
            and help with. I spent 3 years at the CircleBath Hospital,
            thoroughly enjoying every minute.
          </p>
          <p className="mt-5">
            {" "}
            My next role was a Care Giver for a home care company. Whilst this
            was never an option I had considered in care, after working with the
            clients in their own home, I soon realised that this job has given
            me the most satisfaction and it would be something I would like to
            carry on doing permanently. Getting to know the clients and to form
            a lovely working relationship has been fantastic. I am very
            passionate that the elderly should maintain independence and stay
            living in their own home for as long as it is safe to do so.
            Research has shown that home care can provide a substantially better
            lifestyle than a nursing facility and that a higher standard of
            living can drastically extend an elder’s life span.
          </p>
          <p className="mt-5">
            {" "}
            I enjoy the ability to catch up frequently and to maintain regular
            contact. Something that I was never able to do with patients at the
            hospital once they were discharged. I do believe it is important
            that clients have the ability stay at home with adequate care in
            place to help support them. Not only is it less expensive than
            Nursing Home care, the other advantages are immeasurable. The client
            continues to live in a setting free of potential illnesses that may
            be present in a clinical setting. There are also the comforts of
            remaining in their most familiar place and the ability to carry on
            with their own personal daily routines. Furthermore, family and
            friends can visit whenever the client wishes to have visitors and
            they are not restricted to visiting times.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutBio
