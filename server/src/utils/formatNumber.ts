const formatNumber = (num: string) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

export default formatNumber;
