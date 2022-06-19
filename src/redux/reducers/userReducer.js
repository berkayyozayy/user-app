import { ActionTypes } from "../constants/action-types";

const initialState = {
  users: [
    {
      id: 1,
      name: "Berkay",
      email: "berkayyozayy@gmail.com",
      score: 0,
      imageUrl: "https://randomuser.me/api/portraits/men/21.jpg",
      address: "Istanbul",
      department: "Tech",
    },
  ],
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_USERS:
      return state;
    default:
      return state;
  }
};
