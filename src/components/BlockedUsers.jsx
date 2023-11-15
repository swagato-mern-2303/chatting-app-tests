import { BsThreeDotsVertical } from "react-icons/bs";
import placeholderImg from "../assets/placeholder-img.png";

function BlockedUsers() {
  return (
    <div className="relative overflow-hidden pb-1 pl-5">
      <div className="absolute inset-x-5 flex items-center justify-between bg-white pt-3">
        <h3 className="text-xl font-semibold">Blocked Users</h3>
        <BsThreeDotsVertical className="text-primary-accent" size={20} />
      </div>
      <div className="h-full overflow-y-scroll pt-10">
        <div className="pr-3">
          <Blocked />
          <Blocked />
          <Blocked />
          <Blocked />
          <Blocked />
          <Blocked />
          <Blocked />
        </div>
      </div>
    </div>
  );
}

export default BlockedUsers;

function Blocked() {
  return (
    <div className="flex items-center justify-between border-b border-black/25 py-3 pr-10">
      <div className="flex items-center gap-x-3">
        <img
          className="w-[70px] rounded-full"
          src={placeholderImg}
          alt="profileImg"
        />
        <div>
          <h4 className="text-lg font-semibold">Raghav</h4>
          <p className="text-[10px] font-medium text-black/50">
            Today, 12:22pm
          </p>
        </div>
      </div>
      <button className="rounded-[5px] bg-primary-accent px-2 text-xl font-semibold text-white">
        Unblock
      </button>
    </div>
  );
}
