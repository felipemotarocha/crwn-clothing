import { createSelector } from "reselect";

const selectDirectory = state => state.directory;

export const selectDiretorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);
