
import Needs from './Needs'
import Offers from './Offers'
import Hiring from './Hiring';
import Portfolio from './Portfolio';
import Projects from './Projects';

export default function OrganizationSections() {

    return (<>
        <Needs />
        <Offers />
        <Hiring />
        <Portfolio />
        <Projects isEvent={true} />
    </>
    );
}
