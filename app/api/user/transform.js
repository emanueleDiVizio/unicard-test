export const transformGetUsers = ({ok, data, problem}) => {
  const newData = ok
    ? data.data.map(({avatar, first_name, last_name, email}) => ({
        name: first_name,
        image: avatar,
        surname: last_name,
        email,
      }))
    : {};

  return {ok, data: newData, problem};
};
