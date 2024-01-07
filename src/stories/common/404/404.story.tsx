import { NotFound } from "common/NotFound/NotFound";
import React from "react";

export const NotFoundStory = () => (
  <NotFound
    error={"Ошибка 404"}
    errorDescription={"Страница не найдена"}
    goBackText={"Вернуться на главную страницу"}
    goBackLink={"/"}
    layout="mobile"
  />
);

NotFoundStory.storyName = "not found";
