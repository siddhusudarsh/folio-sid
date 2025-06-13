import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
            Aspiring Front-End Developer & Creative Learner
            </h3>

            <p className="text-muted-foreground">
              I’m a beginner front-end developer driven by curiosity and a deep interest in building beautiful,
              responsive websites. I specialize in learning and applying HTML, CSS, JavaScript, and React to create simple, clean, and functional user interfaces.
              I'm currently exploring UI/UX design, improving my JavaScript skills, and learning tools like Figma to bridge design and development.
              Every day, I focus on building real projects to grow my skills and become industry-ready.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about learning how to build clean, user-friendly websites.
              I enjoy solving small challenges through code and I'm constantly improving by exploring new technologies and building real-world projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="tel:+919063887941" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="https://drive.google.com/file/d/1SRqRiRm8SB6MWWZq57uuF9TSv_KV7ci8/view?usp=sharing" target="blank"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Front-End Development</h4>
                  <p className="text-muted-foreground">
                  Learning how to build modern web interfaces using HTML, CSS, JavaScript, and React.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Design</h4>
                  <p className="text-muted-foreground">
                  Exploring how to create user-friendly layouts using Figma and intuitive design principles
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Learning & Growth</h4>
                  <p className="text-muted-foreground">
                  Committed to continuous learning through hands-on projects, courses, and coding challenges.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};