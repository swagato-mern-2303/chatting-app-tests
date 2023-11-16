import { BsThreeDotsVertical } from "react-icons/bs";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function BlockedUsers() {
  const db = getDatabase();
  const currentUserData = useSelector(
    (state) => state.userLoginInfo.userLoginInfo,
  );

  const [blockedList, setBlockedList] = useState([]);

  useEffect(() => {
    onValue(ref(db, "blocks/"), (snapshot) => {
      const blockedListArr = [];
      snapshot.forEach((item) => {
        item.val().blockedByUserId === currentUserData.uid &&
          blockedListArr.push({ ...item.val(), id: item.key });
      });
      setBlockedList(blockedListArr);
    });
  }, []);

  return (
    <div className="relative overflow-hidden pb-1 pl-5">
      <div className="absolute inset-x-5 flex items-center justify-between bg-white pt-3">
        <h3 className="text-xl font-semibold">Blocked Users</h3>
        <BsThreeDotsVertical className="text-primary-accent" size={20} />
      </div>
      <div className="h-full overflow-y-scroll pt-10">
        <div className="h-full pr-3">
          {blockedList.length ? (
            blockedList.map((item, index) => (
              <Blocked db={db} key={index} data={item} />
            ))
          ) : (
            <h3 className="flex h-full items-center justify-center text-xl font-bold opacity-50">
              You don&apos;t have any blocked users
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default BlockedUsers;

function Blocked({ db, data }) {
  const handleUnblock = () => {
    remove(ref(db, "blocks/" + data.id));
  };
  return (
    <div className="flex items-center justify-between border-b border-black/25 py-3 pr-10">
      <div className="flex items-center gap-x-3">
        <img
          className="w-[70px] rounded-full"
          src={data.blockedUserImg}
          alt="profileImg"
        />
        <div>
          <h4 className="text-lg font-semibold">{data.blockedUserName}</h4>
          <p className="text-[10px] font-medium text-black/50">
            Today, 12:22pm
          </p>
        </div>
      </div>
      <button
        onClick={handleUnblock}
        className="rounded-[5px] bg-primary-accent px-2 text-xl font-semibold text-white"
      >
        Unblock
      </button>
    </div>
  );
}
