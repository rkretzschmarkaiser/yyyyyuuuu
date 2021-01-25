export const myPageBRoute = {
  loadChildren: () =>
    import('./my-page-b.module').then(m => m.MyPageBPageModule)
};
