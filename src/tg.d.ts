interface DownloadFileParams {
  url?: string;
  file_name?: string;
}

interface WebApp extends WebApp {
  requestFullscreen: () => void;
  addToHomeScreen: () => void;
  downloadFile: (
    params: DownloadFileParams,
    callback?: (accepted: boolean) => void
  ) => void;
  expand: () => void;
}
