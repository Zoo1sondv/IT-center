const constantKeys = {
  AUTH_LOCAL_STORAGE_KEY: 'LSKDJFHS',
  ACCESS_TOKEN_LOCAL_STORAGE_KEY: 'KLSIDJNC',
  SECRET_KEY: 'key secret 2001.sondv',
  REGEX_PASSWORD: new RegExp(
    /^(?=.*[a-z])(?=.*\d)[a-z\d!@#$%^&*()_+-={}[\];:,.<>?/\\'"|]{8,}$/,
    'iu',
  ),
  REGEX_PHONE: new RegExp(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    'iu',
  ),
  REGEX_DATE: new RegExp(
    /^\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$/,
    'iu',
  ),
  URL_API_YOUTUBE: 'https://www.googleapis.com/youtube/v3/',
  KEY_API_YOUTUBE: 'AIzaSyDG86xggEDaitlzs36zHBck4yfRyWoUUkw',
  MAX_RESULT_YOUTUBE: 9,
};

export default constantKeys;
