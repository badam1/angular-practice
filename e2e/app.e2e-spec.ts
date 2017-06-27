import { AnuglarPracticePage } from './app.po';

describe('anuglar-practice App', () => {
  let page: AnuglarPracticePage;

  beforeEach(() => {
    page = new AnuglarPracticePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
