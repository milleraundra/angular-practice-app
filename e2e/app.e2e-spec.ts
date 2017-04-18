import { AngularPracticeAppPage } from './app.po';

describe('angular-practice-app App', () => {
  let page: AngularPracticeAppPage;

  beforeEach(() => {
    page = new AngularPracticeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
