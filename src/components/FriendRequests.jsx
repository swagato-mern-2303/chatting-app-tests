import { getDatabase, ref, onValue } from "firebase/database";
import { BsThreeDotsVertical } from "react-icons/bs";
import placeholderImg from "../assets/placeholder-img.png";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function FriendRequests() {
  const db = getDatabase();
  const currentUserData = useSelector(
    (state) => state.userLoginInfo.userLoginInfo,
  );
  const [requestsList, setRequestsList] = useState([]);

  useEffect(() => {
    const requestsref = ref(db, "friendrequests/");
    onValue(requestsref, (snapshot) => {
      let requestsarr = [];
      snapshot.forEach((item) => {
        item.val().receiverId === currentUserData.uid &&
          requestsarr.push(item.val());
      });
      setRequestsList(requestsarr);
    });
  }, []);

  return (
    <div className="relative overflow-hidden pb-1 pl-5">
      <div className="absolute inset-x-5 flex items-center justify-between bg-white pt-3">
        <h3 className="text-xl font-semibold">Friend Requests</h3>
        <BsThreeDotsVertical className="text-primary-accent" size={20} />
      </div>
      <div className="h-full overflow-y-scroll pt-10">
        <div className="h-full pr-3">
          {requestsList.length ? (
            requestsList.map((item, index) => (
              <Request data={item} key={index} />
            ))
          ) : (
            <h3 className="flex h-full items-center justify-center text-xl font-bold text-slate-400">
              You don&apos;t have any friend requests
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default FriendRequests;

function Request({ data }) {
  return (
    <div className="flex items-center justify-between border-b border-black/25 py-3">
      <div className="flex items-center gap-x-3">
        <img
          className="w-[70px] rounded-full"
          src={placeholderImg}
          alt="profileImg"
        />
        <div>
          <h4 className="text-lg font-semibold">{data.senderName}</h4>
          <p className="text-sm font-medium text-slate-500">Hi........</p>
        </div>
      </div>
      <button className="rounded-[5px] bg-primary-accent px-2 text-xl font-semibold text-white">
        Accept
      </button>
    </div>
  );
}
