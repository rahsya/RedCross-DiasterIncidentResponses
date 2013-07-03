class Incident < ActiveRecord::Base
  attr_accessible :address, :amount_of_assistance, :dispatch_date, :incident_type, :response_time, :time_to_find_responders
end
