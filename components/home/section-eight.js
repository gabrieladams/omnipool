const teamMember = {
  name: "John Doe",
  position: "chief executive officer",
  description:
    "John Doe is board certified, practicing physician in Casper, Wyoming since 2010. He holds BS and MS degrees in Mechanical Engineering, a PhD in Physiology and a MD from Temple University, followed by residency and fellowship in radiology at Stanford University. He founded McGinley Orthopedics in 2012",
};

function HomeSectionEight() {
  return (
    <section className="py-[104px] text-center text-white">
      <div className="site-container">
        <h1 className="section-title mb-12">Our team</h1>

        <div className="row">
          {[1, 2, 3, 4, 5, 6].map((item) => {
            return (
              <div
                key={item}
                className="col basis-full md:basis-6/12 lg:basis-4/12"
              >
                <div className="overlay relative mb-[30px] h-[360px] cursor-pointer rounded-t-[4px] border-b-[4px] border-highlight-color after:bg-primary-theme-color/60 after:transition-colors after:duration-150 after:ease-linear">
                  <div className="team-member-img bg-img h-full rounded-t-[4px]"></div>

                  <div className="absolute left-0 bottom-0 z-10 w-full p-6 uppercase">
                    <h4 className="text-[20px]">{teamMember.name}</h4>

                    <span className="font-bold text-highlight-color">
                      {teamMember.position}
                    </span>
                  </div>

                  <div className="absolute top-0 left-0 z-20 flex h-full w-full items-center justify-center rounded-t-[4px] bg-gradient-to-b from-primary-theme-color/70 to-primary-theme-color p-12 text-[15px] opacity-0 transition-opacity duration-[400ms] ease-in hover:opacity-100">
                    <p className="">{teamMember.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeSectionEight;
