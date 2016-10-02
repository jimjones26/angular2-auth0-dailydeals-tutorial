import { Angular2Auth0DailydealsTutorialPage } from './app.po';

describe('angular2-auth0-dailydeals-tutorial App', function() {
  let page: Angular2Auth0DailydealsTutorialPage;

  beforeEach(() => {
    page = new Angular2Auth0DailydealsTutorialPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
