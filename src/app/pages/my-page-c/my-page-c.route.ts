export const myPageCRoute = {
  loadChildren: () =>
    import('./my-page-c.module').then(m => m.MyPageCPageModule)
};
