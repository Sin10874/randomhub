'use client';

import Navbar from '@/app/components/Navbar';
import GroupGeneratorPanel from '@/app/components/GroupGeneratorPanel';

export default function GroupGeneratorPage() {
  const siteUrl = "https://randomhub.io";

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Random Group Generator - Free Team Maker & Group Randomizer',
    url: `${siteUrl}/random-group-generator`,
    applicationCategory: 'UtilityApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    description: 'Free random group generator and team maker for creating fair, balanced teams. Perfect group randomizer for classrooms, sports, work projects, and events. Split any list into random groups instantly with our easy-to-use team generator tool.',
    browserRequirements: 'Requires JavaScript',
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      <Navbar />
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-foreground mb-4 uppercase tracking-tight">
            Group<br className="sm:hidden" /> Generator
          </h1>
          <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">
            Team Distribution System // v1.0
          </p>
        </div>

        {/* Main Panel */}
        <div className="mb-16">
          <GroupGeneratorPanel />
        </div>

        {/* SEO / Info Section */}
        <div className="max-w-4xl mx-auto mb-12 space-y-12">
          {/* What is Random Group Generator */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-6 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              What is a Random Group Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans mb-4">
              A <strong>random group generator</strong> (also called a <strong>team generator</strong>, <strong>group maker</strong>, or <strong>group randomizer</strong>) is an unbiased tool that randomly divides lists into balanced teams. Our free team maker uses proven randomization algorithms to create fair group assignments without favoritism.
            </p>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Whether you&apos;re a teacher organizing classroom activities, a sports coach dividing players for practice, a project manager creating work teams, or an event organizer setting up competition groups, this random team generator delivers instant, balanced results. Perfect for educators, coaches, managers, and anyone who needs to split groups fairly.
            </p>
          </div>

          {/* How to Use */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              How to Use This Team Maker
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-grid border border-grid">
              {[
                { title: "Classroom Activities", desc: "Teachers can divide students into fair groups for projects, discussions, labs, and collaborative learning." },
                { title: "Sports Teams", desc: "Coaches can create balanced teams for practices, scrimmages, tournaments, and training sessions." },
                { title: "Work Projects", desc: "Managers can assign employees to project teams, committees, task forces, and working groups." },
                { title: "Party Games", desc: "Hosts can organize guests into teams for trivia, charades, scavenger hunts, and party games." },
                { title: "Event Planning", desc: "Organizers can divide attendees for workshops, breakout sessions, networking groups, and activities." },
                { title: "Task Distribution", desc: "Distribute responsibilities, chores, assignments, or tasks fairly among team members." }
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 hover:bg-zinc-50 transition-colors">
                  <h3 className="font-mono font-bold text-foreground mb-2 uppercase tracking-wider text-xs">{item.title}</h3>
                  <p className="text-zinc-500 text-sm font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Guide */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Step-by-Step Guide
            </h2>
            <div className="space-y-6">
              {[
                { step: "01", title: "Enter Names", desc: "Type or paste your list of names, items, or tasks. Enter each item on a new line. You can add as many items as you need." },
                { step: "02", title: "Set Group Count", desc: "Choose how many groups you want to create. The generator will automatically distribute items evenly across all groups." },
                { step: "03", title: "Generate Groups", desc: "Click the 'Generate Groups' button to randomly divide your list. Items are shuffled and distributed fairly across all teams." },
                { step: "04", title: "Review & Regenerate", desc: "Review the generated groups. Not satisfied? Click generate again for a different random arrangement." },
                { step: "05", title: "Copy Results", desc: "Use the copy button to copy individual groups or all groups at once for easy sharing and record-keeping." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent text-white flex items-center justify-center font-mono text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Key Features
            </h2>
            <div className="space-y-6">
              {[
                { icon: "🎲", title: "True Randomization", desc: "Uses Fisher-Yates shuffle algorithm for genuinely random, unbiased group assignments." },
                { icon: "⚖️", title: "Balanced Distribution", desc: "Automatically distributes items evenly across all groups using round-robin allocation." },
                { icon: "🔄", title: "Unlimited Regeneration", desc: "Generate new group arrangements as many times as needed until you find the perfect mix." },
                { icon: "📋", title: "Easy Copy Function", desc: "Copy individual groups or all groups at once with one click for sharing or record-keeping." },
                { icon: "📊", title: "Live Statistics", desc: "See total members, group count, and average members per group updated in real-time." },
                { icon: "⌨️", title: "Keyboard Shortcuts", desc: "Press Cmd/Ctrl + Enter to quickly regenerate groups without using your mouse." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <span className="text-2xl grayscale opacity-70 pt-1">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-zinc-500 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Popular Use Cases
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Education", items: ["Study groups", "Lab partners", "Project teams", "Discussion groups", "Peer review pairs"] },
                { title: "Business", items: ["Brainstorming sessions", "Department teams", "Committee assignments", "Networking groups", "Training workshops"] },
                { title: "Sports & Fitness", items: ["Practice teams", "Scrimmage divisions", "Tournament brackets", "Workout buddies", "Competition groups"] },
                { title: "Social Events", items: ["Party game teams", "Dinner seating", "Secret Santa", "Team building", "Icebreaker activities"] }
              ].map((category, i) => (
                <div key={i} className="border border-grid p-6 bg-zinc-50">
                  <h3 className="font-mono font-bold text-foreground mb-3 uppercase tracking-wider text-sm">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-zinc-600">
                        <span className="w-1.5 h-1.5 bg-accent flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="swiss-card p-6 sm:p-8 bg-white">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-8 flex items-center text-foreground">
              <span className="w-2 h-8 bg-accent mr-3"></span>
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                { q: "How does this random group generator work?", a: "Our team maker uses the Fisher-Yates shuffle algorithm to randomly shuffle your list, then distributes members evenly across groups using round-robin allocation. This ensures true randomization and balanced team sizes." },
                { q: "Is the team assignment truly random?", a: "Yes! Our group randomizer uses a proven algorithm (Fisher-Yates) that ensures every possible team combination has an equal chance of occurring. There is no bias or pattern in the assignments." },
                { q: "What if I don't like the team arrangement?", a: "Simply click generate again to create a completely new random arrangement. You can use our team generator as many times as you want until you're satisfied with the groups." },
                { q: "Can I create uneven group sizes?", a: "The group maker automatically distributes members evenly. If your total doesn't divide evenly, some teams will have one extra member. This ensures the fairest distribution possible." },
                { q: "Is there a limit to how many people or teams I can create?", a: "You can enter as many names as needed and create 2-20 groups. Our random team generator will automatically calculate the optimal distribution based on your inputs." },
                { q: "Can I save or share my generated teams?", a: "Yes! Use the copy button to copy individual groups or all teams at once. You can then paste the results into emails, documents, or messaging apps." }
              ].map((item, i) => (
                <div key={i}>
                  <h3 className="font-bold text-foreground mb-2 text-lg">{item.q}</h3>
                  <p className="text-zinc-500 font-sans text-sm leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose */}
          <div className="swiss-card p-6 sm:p-8 bg-white border-l-4 border-l-accent">
            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-foreground">
              Why Choose This Team Generator?
            </h2>
            <p className="text-zinc-600 text-base leading-relaxed font-sans">
              Unlike basic name pickers, our <strong>random group generator</strong> combines true randomization with balanced distribution. This <strong>team maker</strong> delivers fair results for classrooms, sports, work projects, and events instantly. Features include unlimited regeneration, one-click copying, live statistics, and keyboard shortcuts. <span className="text-accent font-semibold">Free forever, unlimited use, no registration required.</span>
            </p>
          </div>
        </div>
      </main>

      <footer className="border-t border-grid py-8 bg-background">
        <div className="container mx-auto px-4 text-center">
          <p className="text-zinc-400 font-mono text-xs uppercase tracking-widest">
            © 2025 RandomHub System
          </p>
        </div>
      </footer>
    </div>
  );
}
