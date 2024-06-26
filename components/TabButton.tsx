import React from "react";

type TabButtonProps = {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
};

const TabButton = (props: TabButtonProps) => {
    const { active, selectTab, children } = props;
  const buttonClasses = active
    ? "text-white border-green-500 border-b"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
};

export default TabButton;
