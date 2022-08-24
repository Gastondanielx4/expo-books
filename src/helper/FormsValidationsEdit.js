const validationsFormEdit = (form) => {
  let errors = {};
  let regexName = /^[ A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]{1,60}$/,
    regexDescription = /^.{1,300}$/,
    regexPages = /^[0-9]{1,7}$/,
    regexDate =
      /^(?:(?:(?:0?[1-9]|1\d|2[0-8])[/](?:0?[1-9]|1[0-2])|(?:29|30)[/](?:0?[13-9]|1[0-2])|31[/](?:0?[13578]|1[02]))[/](?:0{2,3}[1-9]|0{1,2}[1-9]\d|0?[1-9]\d{2}|[1-9]\d{3})|29[/]0?2[/](?:\d{1,2}(?:0[48]|[2468][048]|[13579][26])|(?:0?[48]|[13579][26]|[2468][048])00))$/,
    regexExcerpt = /^.{1,10000}$/,
    regexUrl = /^(https?:\/\/)?([\da-z\\.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;

  if (form.name.length > 0 && !regexName.test(form.name.trim())) {
    errors.name = "This field only accepts letters and 60 characters";
  }

  if (
    form.description.length > 0 &&
    !regexDescription.test(form.description.trim())
  ) {
    errors.description = "Exceeds the maximum of 300 characters";
  }

  if (form.pages.length > 0 && !regexPages.test(form.pages.trim())) {
    errors.pages = "Only numbers and 7 digits maximum ";
  }
  if (
    form.publicationDate.length > 0 &&
    !regexDate.test(form.publicationDate.trim())
  ) {
    errors.publicationDate = "The date or format is not correct";
  }
  if (form.excerpt.length > 0 && !regexExcerpt.test(form.excerpt.trim())) {
    errors.excerpt = "Exceeds the maximum of characters";
  }

  if (form.image.length > 0 && !regexUrl.test(form.image.trim())) {
    errors.image = "Please enter a valid URL";
  }
  return errors;
};

export default validationsFormEdit;
