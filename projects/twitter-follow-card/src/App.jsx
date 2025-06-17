import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

const users = [
  { userName: "vercel", name: "Vercel", isFollowing: true },
  { userName: "gaearon", name: "Dan Abramov", isFollowing: true },
  { userName: "sindresorhus", name: "Sindre Sorhus" },
  { userName: "sarah_edo", name: "Sarah Drasner", isFollowing: false },
  { userName: "kentcdodds", name: "Kent C. Dodds", isFollowing: false },
  { userName: "cassidoo", name: "Cassidy Williams", isFollowing: false },
];

export function App() {
  return (
    <div className="container">
      <h2 className="container-title">A quién seguir</h2>
      <section className="App">
        {users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))}
      </section>
    </div>
  );
}
