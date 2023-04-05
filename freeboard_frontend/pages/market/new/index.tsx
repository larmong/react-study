import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import MarketWrite from "../../../src/components/units/market/write/MarketWrite.container";

function MarketNew() {
  return <MarketWrite isEdit={false} />;
}

export default withAuth(MarketNew);
