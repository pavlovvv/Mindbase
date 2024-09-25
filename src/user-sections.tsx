
import Needs from './Needs'
import Offers from './Offers'
import Projects from './Projects'
import Portfolio from './Portfolio';

export default function UserSections() {

    return (<>
        <Needs />
        <Offers />
        <Portfolio />
        <Projects isEvent={false} />
    </>
    );
}
