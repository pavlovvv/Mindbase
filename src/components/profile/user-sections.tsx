
import Needs from '@components/sections/Needs'
import Offers from '@components/sections/Offers'
import Projects from '@components/sections/Projects'
import Portfolio from '@components/sections/Portfolio';

export default function UserSections() {

    return (<>
        <Needs />
        <Offers />
        <Portfolio />
        <Projects isEvent={false} />
    </>
    );
}
