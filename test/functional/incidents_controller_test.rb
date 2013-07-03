require 'test_helper'

class IncidentsControllerTest < ActionController::TestCase
  setup do
    @incident = incidents(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:incidents)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create incident" do
    assert_difference('Incident.count') do
      post :create, incident: { address: @incident.address, amount_of_assistance: @incident.amount_of_assistance, dispatch_date: @incident.dispatch_date, incident_type: @incident.incident_type, response_time: @incident.response_time, time_to_find_responders: @incident.time_to_find_responders }
    end

    assert_redirected_to incident_path(assigns(:incident))
  end

  test "should show incident" do
    get :show, id: @incident
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @incident
    assert_response :success
  end

  test "should update incident" do
    put :update, id: @incident, incident: { address: @incident.address, amount_of_assistance: @incident.amount_of_assistance, dispatch_date: @incident.dispatch_date, incident_type: @incident.incident_type, response_time: @incident.response_time, time_to_find_responders: @incident.time_to_find_responders }
    assert_redirected_to incident_path(assigns(:incident))
  end

  test "should destroy incident" do
    assert_difference('Incident.count', -1) do
      delete :destroy, id: @incident
    end

    assert_redirected_to incidents_path
  end
end
