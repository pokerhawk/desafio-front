export interface DashboardStats {
  total_passengers: number;
  total_average_occupancy: string;
  total_expected_revenue: string;
  bottleneck: {
    route_name: string;
    operator_assigned: string;
    total_delay: number;
  }
}
