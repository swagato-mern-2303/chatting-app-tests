import { BsThreeDotsVertical } from "react-icons/bs";
import placeholderImg from "../assets/placeholder-img.png";

function GroupList() {
  return (
    <div className="relative overflow-hidden pb-1 pl-5">
      <div className="absolute inset-x-5 flex items-center justify-between bg-white pt-3">
        <h3 className="text-xl font-semibold">Group List</h3>
        <BsThreeDotsVertical className="text-primary-accent" size={20} />
      </div>
      <div className="h-full overflow-y-scroll pt-10">
        <div className="pr-3">
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
          <Group />
        </div>
      </div>
    </div>
  );
}

export default GroupList;

function Group() {
  return (
    <div className="flex items-center justify-between border-b border-black/25 py-3">
      <div className="flex items-center gap-x-3">
        <img
          className="w-[70px] rounded-full"
          src={placeholderImg}
          alt="profileImg"
        />
        <div>
          <h4 className="text-lg font-semibold">Friends Reunion</h4>
          <p className="text-sm font-medium text-slate-500">Hi Guys, Wassup!</p>
        </div>
      </div>
      <button className="rounded-[5px] bg-primary-accent px-5 text-xl font-semibold text-white">
        Join
      </button>
    </div>
  );
}
