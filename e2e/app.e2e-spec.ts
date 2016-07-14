import { Angular22Page } from './app.po';

describe('angular22 App', function() {
  let page: Angular22Page;

  beforeEach(() => {
    page = new Angular22Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
