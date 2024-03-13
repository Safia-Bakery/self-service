import OrdersList from "../../components/OrdersList";
import ShowOrder from "../../components/ShowOrder";

const BodyFrame = () => {
  return (
    <div className="overflow-auto flex flex-col flex-1">
      <OrdersList />
      <ShowOrder />
    </div>
  );
};

export default BodyFrame;
