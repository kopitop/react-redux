import { renderComponent, expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {
    let component;

    beforeEach(() => {
        const props = { comments: ['First comment', 'Second comment'] };
        component = renderComponent(CommentList, null, props);
    });

    it('show LI for each comment', () => {
        expect(component.find('li').length).to.equal(2);
    });

    it('show each comment that is provided', () => {
        expect(component).to.contain('First comment');
        expect(component).to.contain('Second comment');
    });
});
