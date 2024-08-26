export const AboutMe = () => {
  return (
    <div className="w-full bg-[#d6d7d8] flex justify-center">
      <div className="container  py-24  ">
        <div className="px-8 flex flex-col gap-12 max-w-[1280px] m-auto">
          <div className="flex justify-center">
            <p className="tag">About me</p>
          </div>
          <div className="flex gap-12 justify-between">
            <div className="max-w-[584px]">
              <div className="w-[440px] h-[520px] relative flex items-start">
                <div className="w-[400px] h-[480px] bg-[#E5E7EB] bottom-0 left-0 absolute "></div>
                <div className="image w-[400px] h-[480px] top-0 right-0 absolute"></div>
              </div>
            </div>
            <div className="flex flex-col gap-6 max-w-[584px]">
              <h1 className="font-inter text-3xl not-italic font-semibold text-[#111827]">
                Curious about me? Here you have it:
              </h1>
              <div className="flex flex-col items-start gap-y-12 font-inter text-base not-italic font-normal text-[#4B5563]">
                <p>
                  I'm a designer turned full stack developer, passionate about
                  React.js and Node.js. I excel in blending technical and visual
                  aspects to craft exceptional digital products, prioritizing
                  user experience, precise design, and optimized code.
                </p>
                <p>
                  Since starting my web development journey in 2015, I've
                  embraced challenges and kept up with the latest tech trends.
                  Now in my early thirties, seven years in, I'm building
                  cutting-edge web apps using Next.js, TypeScript, Nestjs,
                  Tailwindcss, Supabase, and more.
                </p>
                <p>
                  With a progressive mindset, I enjoy the entire product
                  development process, from ideation to execution. Off duty,
                  you'll find me on Twitter, tracking startup journeys, or
                  unwinding. Follow me for tech insights and public project
                  updates on Twitter or GitHub.
                </p>
                <p>Finally, some quick bits about me.</p>
                <div className="flex gap-2.5">
                  <div className="flex flex-col gap-2.5">
                    <p>B.E. in Computer Engineering</p>
                    <p>Full time freelancer</p>
                  </div>
                  <p>Avid learner</p>
                </div>

                <p>
                  One last thing, I'm available for freelance work, so feel free
                  to reach out and say hello! I promise I don't bite 😉
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
