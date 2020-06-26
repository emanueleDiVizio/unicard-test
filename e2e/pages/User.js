export const matchUser = async ({name, surname, image, email}) => {
  await expect(element(by.text(`${name} ${surname}`))).toBeVisible();
  await expect(element(by.text(email))).toBeVisible();
  await expect(element(by.label(image))).toBeVisible();
};
