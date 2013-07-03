class CreateIncidents < ActiveRecord::Migration
  def change
    create_table :incidents do |t|
      t.date :dispatch_date
      t.string :incident_type
      t.string :address
      t.integer :response_time
      t.decimal :amount_of_assistance
      t.integer :time_to_find_responders

      t.timestamps
    end
  end
end
