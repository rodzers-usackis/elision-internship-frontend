import RetailerCompanyDto from "./RetailerCompanyDto";

export interface ProductPriceHistorianData {
    retailerCompanyDto: RetailerCompanyDto;
    timestampAmounts: TimestampAmounts[];
}