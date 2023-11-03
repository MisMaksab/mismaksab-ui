import React from 'react'
import styles from './MobileSideBarControls.scss';

import { SearchBar } from '../../common/SearchBar/SearchBar';
import { LanguageDropdown } from '../../common/LanguageDropdown/LanguageDropdown';

const LANGUAGES_ARR = [{short:'rus',long:'russian'},{short:'eng',long:'english'},{short:'est',long:'estonian'}]

export function MobileSideBarControls() {
  return (
    <div className={styles.sideBarMobileControls}>
      <SearchBar sideBarOpen={true} onChange={(val: string) => null} placeHolderText="Найти в MisMaksab" />
      <LanguageDropdown layout='mobile' selectedLanguage="est" languages={LANGUAGES_ARR}/>
    </div>
  )
}
