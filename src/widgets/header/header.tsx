import { Profile } from "./ui/profile";

export const Header = () => {
  return (
    <header className="bg-amber-100 p-2">
      <div className="flex max-w-96 justify-between items-center m-auto">
        App name
        <Profile />
      </div>
    </header>
  );
};
