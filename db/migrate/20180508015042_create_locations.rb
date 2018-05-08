class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :city
      t.string :country
      t.string :timezone
      t.float :tz_offset
      t.string :lang_abbr

      t.timestamps
    end
  end
end
