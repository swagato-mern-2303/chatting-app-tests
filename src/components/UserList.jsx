import { getDatabase, ref, onValue, push } from "firebase/database";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function UserList() {
  const db = getDatabase();
  const [userList, setUserList] = useState([]);
  const currentUserData = useSelector(
    (state) => state.userLoginInfo.userLoginInfo,
  );

  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let userListArr = [];
      snapshot.forEach((item) => {
        currentUserData.uid !== item.key &&
          userListArr.push({ ...item.val(), userId: item.key });
      });
      setUserList(userListArr);
    });
  }, []);
  return (
    <div className="relative overflow-hidden pb-1 pl-5">
      <div className="absolute inset-x-5 flex items-center justify-between bg-white pt-3">
        <h3 className="text-xl font-semibold">User List</h3>
        <BsThreeDotsVertical className="text-primary-accent" size={20} />
      </div>
      <div className="h-full overflow-y-scroll pt-10">
        <div className="pr-3">
          {userList.map((item, index) => (
            <User
              currentUserData={currentUserData}
              userData={item}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserList;

function User({ currentUserData, userData }) {
  const db = getDatabase();
  const handleAddFriend = () => {
    push(ref(db, "friendrequests/"), {
      senderName: currentUserData.displayName,
      senderId: currentUserData.uid,
      senderImg: currentUserData.photoURL,
      receiverName: userData.username,
      receiverId: userData.userId,
    });
  };

  return (
    <div className="flex items-center justify-between border-b border-black/25 py-3 pr-10">
      <div className="flex items-center gap-x-3">
        <img
          className="w-[70px] rounded-full"
          src={userData.profileImg}
          alt="profileImg"
        />
        <div>
          <h4 className="text-lg font-semibold">{userData.username}</h4>
          <p className="text-[10px] font-medium text-black/50">
            {userData.email}
          </p>
        </div>
      </div>
      <button
        onClick={handleAddFriend}
        className="rounded-[5px] bg-primary-accent px-2 text-xl font-semibold text-white"
      >
        +
      </button>
    </div>
  );
}
