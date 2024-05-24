import { ErrorPage } from "../../../common/ErrorPage/ErrorPage";
import React from "react";

export const ErrorPageStory = () => (
  <ErrorPage
    error={"Ошибка 404"}
    errorDescription={"Страница не найдена"}
    goBackText={"Вернуться на главную страницу"}
    goBackLink={"/"}
    layout="mobile"
  />
);

ErrorPageStory.storyName = "error page";
