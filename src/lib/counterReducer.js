export default function CounterReducer(state, action) {
  if (action.type == "Increment") {
    return { count: state.count + 1 };
  } else if (action.type == "Decrement") {
    if (state.count <= 0) return { count: 0 };
    return { count: state.count - 1 };
  } else if (action.type == "Reset") {
    return { count: 0 };
  }
}
