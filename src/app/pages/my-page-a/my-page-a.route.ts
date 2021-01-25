export const myPageARoute = {
  loadChildren: () =>
    import('./my-page-a.module').then(m => m.MyPageAPageModule)
};
