
import Needs from '@components/sections/Needs'
import Offers from '@components/sections/Offers'
import Hiring from '@components/sections/Hiring';
import Portfolio from '@components/sections/Portfolio';
import Projects from '@components/sections/Projects';

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
